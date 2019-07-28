#!/usr/bin/env node

const fs = require('fs-extra')
const path = require('path')
const shell = require('child_process').execSync; 

const [,, ...args] = process.argv

const [pathToInstall] = args

if(!pathToInstall) {
  console.log('Installation path is needed.')
  console.log('')
  console.log('e.g. \'new-lesson 02\' to seed week 2 directory with your students names.')
  return
}

fs.readFile(path.join('.', 'students_instructor.txt'), 'utf8', (err, data) => {
  if(err) throw err
  const names = data.toString().trim().split("\r\n")
  names.forEach(name => {
    // console.log(`${pathToInstall}/${name}`)
    const destination = `${pathToInstall}/${name}`
    fs.ensureDir(destination)
    .then(() => {
      fs.copy(`instructor/${pathToInstall}`, destination)
      .then(() => {
        console.log('success!')
      })
      .catch(err => {
        console.error(err)
      })
    })
    .catch(err => {
      console.error(err)
    })

    // shell(`mkdir -p '${destination}'`);
    // shell(`cp -r 'instructor/${pathToInstall}/*' '${destination}'`);
  })
})
