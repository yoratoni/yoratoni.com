from pathlib import Path

from core import Paths, Cache, Debugger

class Loader:
    @staticmethod
    def separate_scanned_paths_by_types(paths_list: list[Path]) -> dict:
        """Separates different types of path and returns them into a dict.

        Args:
            paths_list (list[Path]): A list containing all the paths to separate.

        Returns:
            dict: A dict that contains two keys: "files" and "directories",
                separating the paths that leads to a file or a directory.
        """
        
        res_dict = {
            "files": [],
            "directories": []
        }
        
        for path in paths_list:
            curr_type = None
            
            if Paths.is_file_path_valid(path):
                curr_type = "files"
            elif Paths.is_directory_path_valid(path):
                curr_type = "directories"
            
            if curr_type is not None:
                res_dict[curr_type].append(path)
            
        return res_dict
    
    
    @staticmethod
    def load(app_directory_path: Path) -> bool:
        """Loads the general directory structure to the cache.
        High-level met. implementing logs & specified dict keys.

        Args:
            app_path (Path): The main app directory path.

        Returns:
            bool: True if everything if loaded, False if missing info.
        """
        
        # Main verification
        if Paths.is_directory_path_valid(app_directory_path):
            scanned_paths = Paths.scan_directory(app_directory_path, True)
            separated_paths = Loader.separate_scanned_paths_by_types(scanned_paths)
            
            # Files dict linking
            for file_path in separated_paths["files"]:
                file_path: Path
                if file_path.name in Cache.files:
                    Cache.files[file_path.name] = file_path
            files_completeness = Cache.verify_dict_completeness(Cache.files)
            
            # Directories dict linking
            for directory_path in separated_paths["directories"]:
                directory_path: Path
                if directory_path.name in Cache.directories:
                    Cache.directories[directory_path.name] = directory_path
            directories_completeness = Cache.verify_dict_completeness(Cache.directories)
                    
            # Verifies Cache dicts completeness
            if len(files_completeness) == 0 and len(directories_completeness) == 0:
                return True
            
            # Cache compliteness log
            Debugger.internal_log(
                102,
                f"Missing files: {files_completeness}",
                f"Missing dirs: {directories_completeness}"
            )
        else:
            # Invalid app directory path
            Debugger.internal_log(101)
            
        return False
