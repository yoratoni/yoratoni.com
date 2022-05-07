from pathlib import Path


class Cache:
    class CorePaths:
        # Main app directory path (relative for better stability)
        main_path = Path.joinpath(Path(__file__).parent.parent, "app")
        
        # Cache accessed scanned directories
        directories = {
            "assets": None,
            "pages": None,
            "static": None,
            "css": None,
            "js": None
        }

        # Cache accessed scanned files
        files = {
            "index.html": None,
            "style.css": None,
            "main.js": None
        }
        
    
    @staticmethod
    def verify_dict_completeness(dict_to_verify: dict) -> list[str]:
        """Verifies that a dict is complete by checking if any of its values
        is None, in this case, it is added to a list to be later printed.

        Args:
            dict_to_verify (dict): The dict that needs to be verified.

        Returns:
            list[str]: A list of all the keys with None values.
        """
        
        return [key for key in dict_to_verify.keys() if dict_to_verify[key] is None]
