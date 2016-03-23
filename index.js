'use strict';

const fs = require('fs');
const path = require('path');
const jade = require('jade');

const init = (options) => {
  return {};
};

const compileAll = () => {
  const filesToCompile = listFilesInSourceWithCategories(this.options.source);
}

function listFilesInSourceWithCategories (source, options) {
  const inAtoms = listFilesIn(path.join(source, 'atoms'))
  const inMolecules = listFilesIn(path.join(source, 'molecules'));
  const inOrganisms = listFilesIn(path.join(source, 'organisms'));
  const inTemplates = listFilesIn(path.join(source, 'templates'));
  const inPages = listFilesIn(path.join(source, 'pages'));

  const atoms = categorizeFiles(inAtoms, options);
  const molecules = categorizeFiles(inMolecules, options);
  const organisms = categorizeFiles(inOrganisms, options);
  const templates = categorizeFiles(inTemplates, options);
  const pages = categorizeFiles(inPages, options);

  return {
    'atoms': atoms,
    'molecules': molecules,
    'organisms': organisms,
    'templates': templates,
    'pages': pages
  };
}

function listFilesIn (dir) {
  
}

function categorizeFiles (dir, options) {
  
}
