'use strict';

const Generator = require('yeoman-generator');
const utils = require('../utils');

const defaultCAPrefix = 'ca';
const defaultNumberOfInstances = 1;

module.exports = class extends Generator {

  async prompting() {
    const orgNamespace = this.options.orgNamespace;

    const questions = [{
      type: 'input',
      name: 'prefix',
      message: `[${orgNamespace}] Certificate Authority (CA):\n${utils.tab}hostname prefix`,
      default: defaultCAPrefix,
    }];
    const answers = await this.prompt(questions);
    await utils.updateNamespace(this.config, orgNamespace, 'ca', answers);
  }

};