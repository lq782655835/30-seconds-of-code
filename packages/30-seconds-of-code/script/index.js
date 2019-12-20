const fs = require('fs-extra');
const path = require('path')
const rulesObject = require('./vscode.json')

function generator() {
    let getRules = Object.keys(rulesObject).reduce((rules, key) => {
        let ruleObj = rulesObject[key]
        return rules.concat({
            method: key,
            method_body: 'export ' + ruleObj['body'].join('\n')
        })
    }, [])

    fs.writeFileSync(path.resolve(__dirname, './dist.js'), getRules.map(rule => rule.method_body).join('\n'))
    console.log('done')
}

generator()

