const express = require('express');
const Log = require('../../../db/schemas/log.schema');


const findAll = async () => {
  let logs
  try {
    logs = await Log.find()
    if (logs.length == 0) {
      return {status: "failed", message: "Kayit bulunamadi"}
    }
    else {
      return {status: "ok", message: logs}
    }
  } catch (err) {
    return {status: "failed", message: err}
  }
};

const findById = async (id) => {
  let log
  try {
    log = await Log.findById(id)
    if (log.length == 0) {
      return {status: "failed", message: "Kayit bulunamadi"}
    }
    else {
      return {status: "ok", message: log}
    }
  }
  catch (err) {
    return {status: "failed", message: 'Kayit bulunamadi'}
  }
}

const createLog = async (req) => {
  const {user, info, method} = req.body;
  let log = new Log({user, info, method})
  try {
    await log.save()
    return {status: "ok", message: req.body, log}
  }
  catch (err) {
    return{status: "failed", message: err}
  }
}

const deleteLog = async (id) => {
  try {
    let log
    if (log != null) {
      log = await Log.findByIdAndDelete(id)
      return {status: "ok", message: 'Kayit basariyla silindi', log}
    }
    else {
      return {status: "failed", message: 'Kayit bulunamadi'}
    }
  }
  catch (err) {
    return {status: "failed", message: err}
  }
}

const updateLog = async (id, reqLog) => {
  try {
    const {user, info} = reqLog
    const oldData = (await findById(id)).message
    await Log.findByIdAndUpdate(id, { $set: {user, info}})
    return {status: 'ok', message: reqLog, oldData}
  }
  catch (err) {
    return {status: 'failed', message: err}
  }
}

module.exports = {
  findAll,
  findById,
  createLog,
  deleteLog,
  updateLog,
};