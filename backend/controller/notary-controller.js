import Notary from "../model/notary.js";

export const addNotary = async (req, res) => {
  try {
    const notary = await new Notary({
      username: req.body.username,
      name: req.body.name,
      email: req.userData.email,
      aadhar: req.body.aadhar,
      profile_pic: req.body.profile_pic,
      serial_no: req.body.serial_no,
      bar_association_reg_no: req.body.bar_association_reg_no,
      gender: req.body.gender,
      age: req.body.age,
      summary: req.body.summary,
      commission_no: req.body.commission_no,
      commission_expiry: req.body.commission_expiry,
      jurisdiction_covered: req.body.jurisdiction_covered,
      experience: req.body.experience,
      location: req.body.location,
      availability: req.body.availability,
      languages_spoken: req.body.languages_spoken,
      cost: req.body.cost,
      points: req.body.points,
      incentive_level: req.body.incentive_level,
      rating: req.body.rating,
    });

    await notary
      .save()
      .then(() => {
        res.status(200).json({
          message: "successfully registered",
          details: notary,
        });
      })
      .catch((err) => {
        res.status(400).json({
          message: "failed to register",
          details: err,
        });
        console.log(err);
      });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getNotaries = async (req, res) => {
  try {
    const notaries = await Notary.find();
    res.status(200).send(notaries);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const fetchNotary = async (req, res) => {
  try {
    const notary = await Notary.findById(req.params.id);

    res.status(200).json(notary);
  } catch (error) {
    res.status(500).json(error);
  }
};




