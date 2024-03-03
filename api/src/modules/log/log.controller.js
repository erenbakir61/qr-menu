const logService = require("./log.service")

const findAll = async (req,res) => {
  res.send(await logService.findAll())
}
const findById = async (req, res) => {
  res.send(await logService.findById(req.params.prodId))
}

const createLog = async (req, res) => {
  res.send(await logService.createLog(req))
}

const deleteLog = async (req, res) => {
  res.send(await logService.deleteLog(req.params.prodId))
}

const updateLog = async (req,res) => {
  res.send(await logService.updateLog(req.params.prodId, req.body))
}


module.exports = {
  findAll,
  findById,
  createLog,
  deleteLog,
  updateLog,
}