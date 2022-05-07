from pathlib import Path

from core import Paths, Cache, Debugger


class Loader:
    @staticmethod
    def separate_core_paths_by_types(paths_list: list[Path]) -> dict:
        """Separates different types of path (files or dirs) and returns them into a dict.

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
    def fill_cache_core_path_dict(
        core_paths_dict_to_fill: dict,
        separated_core_paths_list: list[Path]
    ) -> bool:
        """Used to fill one cache core paths dict based on the dict to fill
        and a list that contains all the paths necessary to fill the dict.

        Args:
            core_paths_dict_to_fill (dict): A dict from Cache.CorePaths that needs to be filled.
            separated_core_paths_list (list[Path]): A list that contains multiple paths.

        Returns:
            bool: True if the dictionnary if fully filled.
        """
        
        for path in separated_core_paths_list:
            path: Path
            
            if path.name in core_paths_dict_to_fill:
                core_paths_dict_to_fill[path.name] = path
                
        return Cache.verify_dict_completeness(core_paths_dict_to_fill)
    
    
    @staticmethod
    def load_cache(app_directory_path: Path) -> bool:
        """Loads the general directory structure to the cache (CorePaths).
        High-level method -> implementing logs & specified dict keys.

        Args:
            app_path (Path): The main app directory path.

        Returns:
            bool: True if everything if loaded, False if missing info.
        """
        
        if Paths.is_directory_path_valid(app_directory_path):
            # Scan the files/dirs inside the app directory path and separate them by type
            core_paths = Paths.scan_directory(app_directory_path, True)
            separated_core_paths = Loader.separate_core_paths_by_types(core_paths)
            
            files_completeness = Loader.fill_cache_core_path_dict(
                Cache.CorePaths.files,
                separated_core_paths["files"]
            )

            directories_completeness = Loader.fill_cache_core_path_dict(
                Cache.CorePaths.directories,
                separated_core_paths["directories"]
            )
                    
            # Verifies Cache dicts completeness
            if len(files_completeness) == 0 and len(directories_completeness) == 0:
                return True
            
            # Cache compliteness problem log
            Debugger.internal_log(
                102,
                f"Missing directories: {directories_completeness}",
                f"Missing files: {files_completeness}"
            )
        else:
            # Invalid app directory path
            Debugger.internal_log(101)
            
        return False
