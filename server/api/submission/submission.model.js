'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SubmissionSchema = new Schema({
    titleName: String,
    format: String,
    abstract: String,
    typeofPres: String,
    flexibleType: Boolean,
    lastName: String,
    firstName: String,
    lastNameCo: String,
    firstNameCo: String,
    lastNameCo2: String,
    firstNameCo2: String,
    studentEmail: String,
    studentCoEmail: String,
    studentCo2Email: String,
    discipline: String,
    sponsor: String,
    adviser: String,
    adviserEmail: String,
    feature: Boolean,
    mediaNeeds: String,
    otherNeeds: String,
    tshirt: String,
    tshirtCo: String,
    tshirtCo2: String,
    otherInfo: String,
    copy: Boolean
});

module.exports = mongoose.model('Submission', SubmissionSchema);