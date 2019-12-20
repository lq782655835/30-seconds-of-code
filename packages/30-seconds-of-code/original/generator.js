const fs = require('fs');
const path = require('path')
const rulesObject = require('./vscode.json')

function generator() {
    let getRules = Object.keys(rulesObject).reduce((rules, key) => {
        let ruleObj = rulesObject[key]
        let { body } = ruleObj
        if (body.some(line => line.includes('require('))) {
            // remove node code
            return rules
        } else {
            return rules.concat({
                method: key,
                method_body: 'export ' + body.join('\n')
            })
        }
    }, [])
    let text = getRules.map(rule => rule.method_body).join('\n')

    fs.writeFileSync(path.resolve(__dirname, './index.js'), text)
    console.log('done')
}

generator()

