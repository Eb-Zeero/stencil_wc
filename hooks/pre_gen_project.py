import re
import sys


MODULE_REGEX = r'\A[^\W][a-z0-9_-]+$'
TAG_REGEX = r'^[a-z]([a-z\d]*)(?:-[a-z\d]+)+$'

module_name = '{{ cookiecutter.package_name }}'
tag_name = '{{ cookiecutter.component_tag }}'

if not re.match(MODULE_REGEX, module_name):
    print('ERROR: The package name (%s) is not a valid module name. Please use a url friendly name ' % module_name)

    #Exit to cancel project
    sys.exit(1)

if not re.match(TAG_REGEX, tag_name):
    print('ERROR: The tag name (%s) is not a valid tag name. A tag name is lower case, numbers and must contain "-" '
          'in between. And it should not start with a number, have "_" or contains special character' % tag_name)

    #Exit to cancel project
    sys.exit(1)
