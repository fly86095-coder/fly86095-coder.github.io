# Live Reading Feedback — Firebase setup

## Services

- Firebase project: `fly-language-party`
- Realtime Database: `https://fly-language-party-default-rtdb.asia-southeast1.firebasedatabase.app`
- Authentication providers: Anonymous and Google
- Hosting remains GitHub Pages; Firebase Hosting is not used.

## Before deploying rules

1. Open `live-reading-admin.html` through a local HTTP server.
2. Sign in with the administrator Google account.
3. Copy the UID shown in the Administrator access card.
4. Replace `REPLACE_WITH_ADMIN_UID` everywhere in `firebase-database.rules.json`.
5. Confirm that the placeholder no longer exists before deployment.

## Deploy only the database rules

```powershell
npx firebase-tools login
npx firebase-tools deploy --only database --project fly-language-party
```

Do not deploy Firebase Hosting. The public website is still deployed through the existing GitHub Pages repository.
