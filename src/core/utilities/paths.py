from typing import Union
from pathlib import Path


class Paths:
    @staticmethod
    def is_file_path_valid(file_path: Path, extension: str = None) -> bool:
        """Returns True if a path to a file is valid.
        
        Note:
            - Verifies if the path is not None.
            - Verifies if the file itself exists.
            - Verifies that it is a path leading to a file.
            - With extension, verifies that the suffix is equal.
        """
        
        if (
            # General file validity
            file_path is not None
            and file_path.exists()
            and file_path.is_file()
            
            # Extension validity
            and (extension is None) ^ (file_path.suffix == extension)
        ):
            return True

        return False
    
    
    @staticmethod
    def is_directory_path_valid(directory_path: Path) -> bool:
        """Returns True if a path leads to a valid directory.
        
        Note:
            - Verifies if the path is not None.
            - Verifies if the directory itself exists.
            - Verifies that it is a path leading to a directory.
        """
        
        if directory_path is not None and directory_path.exists() and directory_path.is_dir():
            return True
        
        return False
    
    
    @staticmethod
    def scan_directory(
        directory_path: Path,
        include_child_directories: bool
    ) -> Union[list[Path], None]:
        """Allows to scan a directory structure to handle general paths operations.

        Args:
            directory_path (Path): The path of the directory to scan.

        Returns:
            Union[list[Path], None]: A list containing all the paths of the public directory
                or None if the path is invalid.
        """
    
        if Paths.is_directory_path_valid(directory_path):
            if not include_child_directories:
                return list(directory_path.iterdir())
            
            # Universal pattern including all files
            return list(directory_path.glob("**/*"))
