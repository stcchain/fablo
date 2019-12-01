'use strict';

const Generator = require('yeoman-generator');
const utils = require('../utils');

const defaultCAPrefix = 'ord';
const defaultNumberOfInstances = 1;

module.exports = class extends Generator {

  async prompting() {
    const orgNamespace = this.options.orgNamespace;

    const questions = [{
      type: 'input',
      name: 'prefix',
      message: `[${orgNamespace}] Orderer:\n${utils.tab}hostname prefix`,
      default: defaultCAPrefix,
    }, {
      type: 'number',
      name: 'instances',
      message: `${utils.tab}number of instances`,
      default: defaultNumberOfInstances,
    }];

    const answers = await this.prompt(questions);
    await utils.updateNamespace(this.config, orgNamespace, 'orderer', answers);
  }

};