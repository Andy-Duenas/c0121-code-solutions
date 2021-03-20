module.exports.propertyMissing = { error: 'Missing one of the properties (name,course,score).' };
module.exports.scoreNotBetween = { error: 'Score must be a positve number and between 0 and 100.' };
module.exports.unexpectedError = { error: 'An unexpected error occurred.' };
module.exports.notProperId = gradeId => {
  return { error: `gradeId is invalid ${gradeId}, enter a positive number` };
};
module.exports.cantFindId = gradeId => {
  return { error: `Cannot find grade with "gradeId" ${gradeId}` };
};
