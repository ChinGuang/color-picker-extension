const pickBtn = document.getElementById('pick-btn');
const resultDiv = document.getElementById('result');
const colorVal = document.getElementById('color-val');
const colorBox = document.getElementById('color-box');
const statusMsg = document.getElementById('status-msg');

pickBtn.addEventListener('click', async () => {
  // Check if the browser supports the API
  if (!window.EyeDropper) {
    alert('Your browser does not support the EyeDropper API');
    return;
  }

  const eyeDropper = new EyeDropper();

  try {
    // 1. Open the EyeDropper
    // This minimizes the popup and lets you click anywhere on screen
    const result = await eyeDropper.open();
    
    // 2. Get the Hex code
    const hexValue = result.sRGBHex;

    // 3. Update the UI
    resultDiv.style.display = 'block';
    colorVal.textContent = hexValue;
    colorBox.style.backgroundColor = hexValue;

    // 4. Copy to clipboard automatically
    await navigator.clipboard.writeText(hexValue);
    
    // 5. Show "Copied" animation
    showCopiedStatus();

  } catch (err) {
    console.log('User canceled the selection.');
  }
});

function showCopiedStatus() {
  statusMsg.style.opacity = '1';
  setTimeout(() => {
    statusMsg.style.opacity = '0';
  }, 2000);
}