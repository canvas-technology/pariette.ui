# parietteUI

-- npm run build
-- npm version minor
-- npm publish

## How to use

1 - npm i pariette ui

2- edit tailwind.config.ts

add this object to config
...,
safelist: [
{
pattern: /grid-(cols|rows)-(1|2|3|4|5|6|7|8|9|10)/,
variants: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', 'responsive']
},
{
pattern: /(col|row)-(span|start|end)-(1|2|3|4|5|6|7|8|9|10)/,
variants: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', 'responsive']
}
],
