const os = require('os');

const hostname = os.hostname();
const homedir = os.homedir()
const hy = os.type() + os.platform()

console.log(`Hostname :- ${hostname} \n HomeDir :- ${homedir} \n OS Type / Platform${hy}`)

async function getIp() {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      console.log('Your public IP address is:', data.ip);
    } catch (error) {
      console.error('Error fetching public IP address:', error);
    }
  }
getIp();



