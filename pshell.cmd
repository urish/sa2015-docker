@powershell -command "& {docker-machine.exe env --shell=powershell vdocker | Invoke-Expression; powershell}"
