#!/bin/bash

GRAY='\033[0;36m'
GREEN='\033[0;32m'
NO_COLOR='\033[1;0m'
IFS=''

### Options ###

# The following is a example, feel free to change.
# for use line break, just append the character \ on line.
# Some characters must be scaped: [$, /]

AUTHOR='Washington Botelho'
DEMO_CSS=''
DEMO_HTML='<form>\
  <input name="number">\
<\/form>'
DEMO_JS="\$('form').populaty({ json: { number: 1 } });"
DESCRIPTION='is a plugin to populate form from a JSON.'
DOMAIN='wbotelhos.com'
FONT_NAME='wbotelhos'
FUNCTIONS="\$('form').populaty('clear');"
NAME='Populaty'
OPTIONS='reset: true'
PALPAY='X8HEP2878NDEG'
SINCE=`date +%Y-%m-%d`
SLUG='populaty'
TITLE='A Form Populator'
VERSION='0.1.0'

### functions ###

compile() {
  FILE=$1
  OUTPUT=`cat ${FILE}`

  echo -e "${GRAY} - Compiling...${NO_COLOR}"

  if [[ "${ANSWER}" == '' || "${ANSWER}" =~ ^y|Y$ ]]; then
    OUTPUT=`echo ${OUTPUT} | sed s/{{demo_css}}/${DEMO_CSS}/g`
  else
    OUTPUT=`echo ${OUTPUT} | sed 's/.*{{demo_css}}//g'`
  fi

  OUTPUT=`echo ${OUTPUT} | sed s/{{author}}/${AUTHOR}/g`
  OUTPUT=`echo ${OUTPUT} | sed s/{{demo_html}}/${DEMO_HTML}/g`
  OUTPUT=`echo ${OUTPUT} | sed s/{{demo_js}}/${DEMO_JS}/g`
  OUTPUT=`echo ${OUTPUT} | sed s/{{description}}/${DESCRIPTION}/g`
  OUTPUT=`echo ${OUTPUT} | sed s/{{domain}}/${DOMAIN}/g`
  OUTPUT=`echo ${OUTPUT} | sed s/{{name}}/${NAME}/g`
  OUTPUT=`echo ${OUTPUT} | sed s/{{options}}/${OPTIONS}/g`
  OUTPUT=`echo ${OUTPUT} | sed s/{{paypal}}/${PAYPAL}/g`
  OUTPUT=`echo ${OUTPUT} | sed s/{{since}}/${SINCE}/g`
  OUTPUT=`echo ${OUTPUT} | sed s/{{slug}}/${SLUG}/g`
  OUTPUT=`echo ${OUTPUT} | sed s/{{title}}/${TITLE}/g`
  OUTPUT=`echo ${OUTPUT} | sed s/{{version}}/${VERSION}/g`

  echo $OUTPUT > $FILE
}

# demo/fonts

echo -e "\n${GRAY}demo/fonts: put your fonts here.${NO_COLOR}"
echo -e "${GRAY} - Removing all files different of *.eot, *.svg, *.ttf and *.woff.${NO_COLOR}"
echo -e "${GRAY} - Renaming fonts files to \"${FONT_NAME}\"...${NO_COLOR}"

for FILE in demo/fonts/*; do
  if [[ "${FILE}" =~ .*\.(eot|svg|ttf|woff)*$ ]]; then
    mv $FILE "demo/fonts/${FONT_NAME}.${BASH_REMATCH[1]}"
  else
    rm $FILE
  fi
done

# demo/images

echo -e 'Your plugin will use image? [Y/n]:'

read ANSWER

if [[ "${ANSWER}" == '' || "${ANSWER}" =~ ^y|Y$ ]]; then
  echo -e "\n${GRAY}demo/images: put your images here.${NO_COLOR}"
  echo -e "${GRAY} - Just images for demo purpose. Mandatory images must be into lib/images.${NO_COLOR}"
  echo -e "${GRAY} - Removing all file from this folder...${NO_COLOR}"

  rm -rf demo/images/*
else
  rm -rf demo/images
fi

# demo/javascripts

echo -e "\n${GRAY}demo/javascripts: put your javascripts here.${NO_COLOR}"
echo -e "${GRAY} - jQuery comes with last version as jquery.js.${NO_COLOR}"
echo -e "${GRAY} - Removing all file from this folder...${NO_COLOR}"
echo -e "${GRAY} - Downloading jQuery...${NO_COLOR}"

rm -rf demo/javascripts/*

curl http://code.jquery.com/jquery.min.js > demo/javascripts/jquery.js

# demo/stylesheets

echo -e "\n${GRAY}demo/stylesheets: put your stylesheets here.${NO_COLOR}"
echo -e "${GRAY} - Just stylesheets for demo purpose. Mandatory stylesheets must be into lib/stylesheets.${NO_COLOR}"
echo -e "${GRAY} - Removing all file from this folder...${NO_COLOR}"

rm -rf demo/stylesheets/*

# demo/favicon.ico

echo -e "\n${GRAY}demo/favicon.ico: copy your own favicon.${NO_COLOR}"
echo -e "${GRAY} - We will let a default for you.${NO_COLOR}"

# lib/jquery.{{slug}}.min.js

FILE='lib/jquery.{{slug}}.min.js'
TARGET="lib/jquery.${SLUG}.min.js"

echo -e "\n${GRAY}${FILE}: put your minified version inside it.${NO_COLOR}"
echo -e "${GRAY} - We have a default doc on top of it. If you use an automatic minify, put it as your prepend.${NO_COLOR}"

# rename
echo -e "${GRAY} - Renaming it to ${TARGET}...${NO_COLOR}"

if [ -f $FILE ]; then
  mv $FILE $TARGET
fi

# compile
compile ${TARGET}

# lib/jquery.{{slug}}.css

FILE='lib/jquery.{{slug}}.css'

echo -e 'Your plugin will use stylesheet? [Y/n]:'

read ANSWER

if [[ "${ANSWER}" == '' || "${ANSWER}" =~ ^y|Y$ ]]; then
  TARGET="lib/jquery.${SLUG}.css"

  echo -e "\n${GRAY}${FILE}: put your stylesheet code inside it.${NO_COLOR}"
  echo -e "${GRAY} - We just make just it will be UTF-8.${NO_COLOR}"

  # rename
  echo -e "${GRAY} - Renaming it to ${TARGET}...${NO_COLOR}"

  if [ -f $FILE ]; then
    mv $FILE $TARGET
  fi

  # compile
    compile ${TARGET}
else
  rm $FILE
fi

# lib/jquery.{{slug}}.js

FILE='lib/jquery.{{slug}}.js'
TARGET="lib/jquery.${SLUG}.js"

echo -e "\n${GRAY}${FILE}: put your javascript code inside it.${NO_COLOR}"
echo -e "${GRAY} - It comes with a default structure. Feel free to change for your preferences.${NO_COLOR}"

# rename
echo -e "${GRAY} - Renaming it to ${TARGET}...${NO_COLOR}"

if [ -f $FILE ]; then
  mv $FILE $TARGET
fi

# compile
compile ${TARGET}

# spec/run.html

FILE='spec/run.html'
TARGET='spec/run.html'

echo -e "\n${GRAY}${FILE}: the spec runner.${NO_COLOR}"

# compile
compile ${TARGET}

# spec/spec.js

FILE='spec/spec.js'
TARGET='spec/spec.js'

echo -e "\n${GRAY}${FILE}: specs file.${NO_COLOR}"

# compile
compile ${TARGET}

# .gitignore

FILE='.gitignore'

echo -e "\n${GRAY}${FILE}: path of the files you want ignore on Git.${NO_COLOR}"

# changelog.md

FILE='changelog.md'
TARGET='changelog.md'

echo -e "\n${GRAY}${FILE}: description of all changes you do on plugin.${NO_COLOR}"

# compile
compile ${TARGET}

# demo.html

FILE='demo.html'
TARGET='demo.html'

echo -e "\n${GRAY}${FILE}: keeps all of your demo examples.${NO_COLOR}"

# compile
compile ${TARGET}

# README.md

FILE='README.md'
TARGET='README.md'

echo -e "\n${GRAY}${FILE}: the resume of all your project.${NO_COLOR}"

# compile
compile ${TARGET}

echo -e "\n${GREEN}jQuery Plugy done!${NO_COLOR}"
