import re
import sys


MODULE_REGEX = r'\A[^\W][a-z0-9_-]+$'

module_name = '{{ cookiecutter.project_name }}'

if not re.match(MODULE_REGEX, module_name):
    print('ERROR: The package name (%s) is not a valid Python module name. Please do not use a - and use _ instead' % module_name)

    #Exit to cancel project
    sys.exit(1)
