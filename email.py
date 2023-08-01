import subprocess

network_ssid = input("Your network SSID :")  # Replace with your Wi-Fi network (SSID)
command = f'netsh wlan show profile name="{network_ssid}" key=clear'
output = subprocess.check_output(command, shell=True).decode()
password = [line.split(":")[1].strip() for line in output.splitlines() if "Key Content" in line]

if password:
    print(f"Network SSID: {network_ssid}\nPassword: {password[0]}")
else:
    print(f"Network SSID '{network_ssid}' not found or password not available.")
