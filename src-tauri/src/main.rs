#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tauri::{
    api::shell, AboutMetadata, CustomMenuItem, Manager, Menu, MenuEntry, MenuItem, Submenu,
};
use tauri_plugin_store::PluginBuilder;

fn main() {
    let ctx = tauri::generate_context!();
    let app = tauri::Builder::default()
        .plugin(PluginBuilder::default().build())
        .menu(Menu::with_items([
            #[cfg(target_os = "macos")]
            MenuEntry::Submenu(Submenu::new(
                &ctx.package_info().name,
                Menu::with_items([
                    MenuItem::About(ctx.package_info().name.clone(), AboutMetadata::default())
                        .into(),
                    MenuItem::Separator.into(),
                    MenuItem::Services.into(),
                    MenuItem::Separator.into(),
                    MenuItem::Hide.into(),
                    MenuItem::HideOthers.into(),
                    MenuItem::ShowAll.into(),
                    MenuItem::Separator.into(),
                    MenuItem::Quit.into(),
                ]),
            )),
            MenuEntry::Submenu(Submenu::new(
                "File",
                Menu::with_items([
                    MenuItem::Separator.into(),
                    CustomMenuItem::new("Close", "Close")
                        .accelerator("cmdOrControl+W")
                        .into(),
                    CustomMenuItem::new("Save", "Save")
                        .accelerator("cmdOrControl+S")
                        .into(),
                ]),
            )),
            MenuEntry::Submenu(Submenu::new(
                "Edit",
                Menu::with_items([
                    MenuItem::Undo.into(),
                    MenuItem::Redo.into(),
                    MenuItem::Separator.into(),
                    MenuItem::Cut.into(),
                    MenuItem::Copy.into(),
                    MenuItem::Paste.into(),
                    #[cfg(not(target_os = "macos"))]
                    MenuItem::Separator.into(),
                    MenuItem::SelectAll.into(),
                ]),
            )),
            MenuEntry::Submenu(Submenu::new(
                "View",
                Menu::with_items([MenuItem::EnterFullScreen.into()]),
            )),
            MenuEntry::Submenu(Submenu::new(
                "Window",
                Menu::with_items([MenuItem::Minimize.into(), MenuItem::Zoom.into()]),
            )),
            // You should always have a Help menu on macOS because it will automatically
            // show a menu search field
            MenuEntry::Submenu(Submenu::new(
                "Help",
                Menu::with_items([CustomMenuItem::new("Learn More", "Learn More").into()]),
            )),
        ]))
        .on_menu_event(|event| {
            let event_name = event.menu_item_id();
            event.window().emit("menu", event_name).unwrap();
            match event_name {
                "Learn More" => {
                    let link = "https://github.com/OlegGulevskyy/uniqtools".to_string();
                    shell::open(&event.window().shell_scope(), link, None).unwrap();
                }
                _ => {}
            }
        })
        .build(ctx)
        .expect("error while running tauri app")
        .run(|_, _| {});
}
