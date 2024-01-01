"use strict";

import FileHound from 'filehound'
import fs from 'fs'
import path from 'path'

const files = FileHound.create()
  .paths('./dist')
  .discard('node_modules')
  .ext('js')
  .find();


files.then((filePaths) => {

  filePaths.forEach((filepath) => {
    fs.readFile(filepath, 'utf8', (err, data) => {


      if (!data.match(/import .* from/g)) {
        return
      }
      let newData = data.replace(/(import .* from\s+['"])(.*)(?=['"])/g, '$1$2.js')
      if (err) throw err;

      console.log(`writing to ${filepath}`)
      fs.writeFile(filepath, newData, function (err) {
        if (err) {
          throw err;
        }
        console.log('complete');
      });
    })

  })
});