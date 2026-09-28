# WaterWatch

Community water crisis web app: report shortages, view a water map, and read updates.

## Run it
1. Open this folder in VS Code (File > Open Folder).
2. Install the recommended extension **Live Server** when prompted.
3. Right-click `index.html` > **Open with Live Server**.

## Structure
```
waterwatch/
├── index.html          Page markup (all five views + login modal)
├── css/styles.css      All styling and colors (see :root variables)
├── js/data.js          Sample data: barangays, pin types, announcements
├── js/app.js           Navigation, login/signup, reports, map, updates
├── assets/images/      Put your hero photo and logo here
├── .vscode/            Editor settings and recommended extensions
└── README.md
```

## Where to edit
- Colors: `:root` at the top of `css/styles.css`
- Barangays and sample pins: `js/data.js`
- Hero photo: add to `assets/images/`, then set `background-image` on `.hero` in `css/styles.css`
- Data is saved in localStorage (keys `ww_users`, `ww_session`, `ww_reports`). Replace with a real backend later.

## Ideas for next steps
- Real map (Leaflet), admin page to verify reports, photo upload, password hashing on a server.
