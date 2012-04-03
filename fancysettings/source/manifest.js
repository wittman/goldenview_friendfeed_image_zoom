this.manifest = {
  "name": "Golden View Friendfeed Image Zoom",
  "icon": "icon.png",
  "settings": [
	{
	  "tab": chrome.i18n.getMessage("options"),
	  "group": chrome.i18n.getMessage("options_bugs"),
	  "name": "report_bug",
	  "type": "button",
	  "label": chrome.i18n.getMessage("options_report_bug"),
	  "text": chrome.i18n.getMessage("options_report_bug_button")
	},
	{
	  "tab": chrome.i18n.getMessage("options"),
	  "group": chrome.i18n.getMessage("options_bugs"),
	  "name": "extension_page",
	  "type": "button",
	  "label": chrome.i18n.getMessage("options_extension_page"),
	  "text": chrome.i18n.getMessage("options_extension_page_button")
	},
	{
	  "tab": chrome.i18n.getMessage("options"),
	  "group": chrome.i18n.getMessage("options_author"),
	  "name": "developer_page",
	  "type": "button",
	  "label": chrome.i18n.getMessage("options_developer_page"),
	  "text": chrome.i18n.getMessage("options_developer_page_button")
	}
  ],
  "alignment": [
	["report_bug", "extension_page", "developer_page"]
  ]
};
