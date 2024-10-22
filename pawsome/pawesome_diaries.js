function settingsDropdownToggle(button) {
    var post = button.closest('.post');
    var settingsDropdown = post.querySelector(".settings_dropdown");
    settingsDropdown.classList.toggle("show_settings_dropdown");
}
