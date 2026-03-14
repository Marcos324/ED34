# Deploy con GitHub + Netlify

## 1. Crear el repositorio en GitHub

1. Entrá a [github.com](https://github.com) e iniciá sesión.
2. Clic en **"+"** (arriba a la derecha) → **"New repository"**.
3. Nombre del repo: por ejemplo `evaluaciones-autismo` (o el que prefieras).
4. Dejalo **público**. No marques "Add a README" (ya tenés uno).
5. Clic en **"Create repository"**.

## 2. Subir el proyecto a GitHub

En PowerShell, desde la carpeta del proyecto:

```powershell
cd c:\Users\marcos.avila\Desktop\dw45

git remote add origin https://github.com/TU-USUARIO/evaluaciones-autismo.git
git branch -M main
git push -u origin main
```

Reemplazá **TU-USUARIO** por tu usuario de GitHub y **evaluaciones-autismo** por el nombre del repo si lo cambiaste.

(Si GitHub te pide usuario/contraseña: usá un **Personal Access Token** como contraseña, no tu contraseña de la cuenta. En GitHub: Settings → Developer settings → Personal access tokens → Generate new token.)

## 3. Conectar Netlify con GitHub

1. Entrá a [app.netlify.com](https://app.netlify.com).
2. **"Add new site"** → **"Import an existing project"**.
3. Clic en **"GitHub"** (o "Deploy with GitHub").
4. Autorizá Netlify si te lo pide.
5. Elegí el repositorio **evaluaciones-autismo** (o el nombre que usaste).
6. Configuración de build:
   - **Branch to deploy:** `main`
   - **Build command:** (dejalo vacío)
   - **Publish directory:** `.` o `/`
7. **"Deploy site"**.

Listo: Netlify te da una URL (ej. `evaluaciones-autismo.netlify.app`). Cada vez que hagas `git push` a `main`, el sitio se actualiza solo.
