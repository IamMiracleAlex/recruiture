### Development

This is a vanilla app powered with postcss and tailwind.

To begin developememt run `npm run dev` to start the postcss cli which compiles the tailwind utility classes into `style.css` in the `css` dir.

### Note

- tailwind is configured to look into the html folder, in case of a modification in structure, please edit the tailwind config `content field` to point at the apropriate places.

- With this current config, Postcss looks into the `input.css` file only and outputs at `style.css`, in any case of css file renaming or modification of folder structure, edit the `npm run dev` scripts command.
