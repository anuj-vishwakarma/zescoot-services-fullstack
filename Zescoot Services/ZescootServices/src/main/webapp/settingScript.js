// Initialize settings with default values
const defaultSettings = {
    appName: 'Bike Rental App',
    appTheme: 'light',
    emailNotifications: true,
    smsNotifications: false
};

// Load default settings into the form
function loadSettings() {
    document.getElementById('app-name').value = defaultSettings.appName;
    document.getElementById('app-theme').value = defaultSettings.appTheme;
    document.getElementById('email-notifications').checked = defaultSettings.emailNotifications;
    document.getElementById('sms-notifications').checked = defaultSettings.smsNotifications;
}

// Save general settings
document.getElementById('save-general-settings').addEventListener('click', function() {
    const appName = document.getElementById('app-name').value;
    const appTheme = document.getElementById('app-theme').value;
    
    // Update settings (for demonstration purposes, we'll use defaultSettings)
    defaultSettings.appName = appName;
    defaultSettings.appTheme = appTheme;
    
    // Apply theme change
    document.body.className = appTheme;
    
    alert('General settings saved!');
});

// Save notification settings
document.getElementById('save-notification-settings').addEventListener('click', function() {
    const emailNotifications = document.getElementById('email-notifications').checked;
    const smsNotifications = document.getElementById('sms-notifications').checked;

    // Update settings
    defaultSettings.emailNotifications = emailNotifications;
    defaultSettings.smsNotifications = smsNotifications;

    alert('Notification settings saved!');
});

// Change password
document.getElementById('save-account-settings').addEventListener('click', function() {
    const newPassword = document.getElementById('change-password').value;
    
    if (newPassword.trim() === '') {
        alert('Please enter a new password.');
        return;
    }

    // Simulate password change (for demonstration purposes)
    alert('Password changed successfully!');
});

// Initialize settings on page load
window.addEventListener('load', function() {
    loadSettings();
});
