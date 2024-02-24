# Adding a Component

Adding a component via CLI is in our roadmap, this is how it's done for now.

## Step 1: Create the component

Create a plain React project using Vite or Next.js and build your component with it.
Vanya currently supports components with:
- TypeScript files
- Storybook files
- CSS files
- Image files
- Video files etc

## Step 2: Export your component

Bundle your files together and zip them.

## Step 3: Upload your component

Drop your zip file into [./packages/pkg](./packages/pkg/).
Drop a demo of the component into the [./apps/web/pages/pkgs/demos/](./apps/web/pages/pkgs/demos/)

## Step 4: Add to the Registry

Upload your `.mdx` file to the [./apps/web/pages/registry/](./apps/web/pages/registry/) directory.
Modify the [./apps/web/pages/registry/_meta.json](./apps/web/pages/registry/_meta.json) with the accurate name (sorted alphabetically)

## Step 5: Add to the component list

Upload screenshots of your component running to [./apps/web/pages/pkgs/images/](./apps/web/pages/pkgs/images/)
Add the following code to [./apps/web/pages/registry/index.mdx](./apps/web/pages/registry/index.mdx)
```tsx
<PkgCard title="component_name" href="/registry/path_to_component">
    <>![component_name preview](./../pkgs/images/path_to_screenshot.jpg)</>
</PkgCard>
```

Replace `path_to_screenshot.jpg` with appropriate file name.
Replace `component_name` with the name of your component.
Replace `path_to_component` with the name of your file uploaded in **Step 4** (without the extension name)

## The End

This process is not for contributors *yet*, we aim to streamline the process before accepting contributions.
