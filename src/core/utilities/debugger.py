from typing import Any

import sys


class Debugger:
    class Types:
        CRITICAL = "Critical"
    
    
    CODES = {
        101: {"category": Types.CRITICAL, "message": "The app directory path is invalid."},
        102: {"category": Types.CRITICAL, "message": "Cache compliteness verification failed."}
    }
    
    
    @staticmethod
    def internal_log(int_code: int, *args: Any):
        """Prints an internal log related to the core Python app,
        these static codes are listed inside the class dict named "CODES".

        Args:
            int_code (int): The corresponding code inside the "CODES" dict.
            args (Any, optional): Adds more info like data if necessary.
        """
    
        if int_code in Debugger.CODES:
            code = Debugger.CODES[int_code]
            category = code["category"]
            message = code["message"]
            
            formatted_msg = f"[{category}] CODE-{int_code}: {message}"
            
            # Adds additional info to a new line (1-tab)
            for arg in args:
                formatted_msg = f"{formatted_msg}\n    {arg}"
            
            print(formatted_msg)
            
            if category == Debugger.Types.CRITICAL:
                sys.exit(int_code)
        else:
            print(f"[Warning] CODE_0: Invalid debugger code.")
