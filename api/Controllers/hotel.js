import Hotel from "../models/Hotel.js";

export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const saveHotel = await newHotel.save();
    res.status(200).json(saveHotel);
  } catch (error) {
    next(error);
  }
};

export const updateHotel = async (req, res) => {
  try {
    const updateHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateHotel);
  } catch (error) {
    res.status(500).json({ error });
    console.log({ error });
  }
};

export const readHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json({ error });
    console.log({ error });
  }
};

export const deleteHotel = async (req, res) => {
  try {
    const updateHotel = await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel Deleted");
  } catch (error) {
    res.status(500).json({ error });
    console.log({ error });
  }
};

export const getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find(req.query).limit(req.query.limit);
    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({ error });
    console.log({ error });
  }
};

export const countbycity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (error) {
    next(error);
  }
};

export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "hotel" });
    const appartmentCount = await Hotel.countDocuments({ type: "apartment" });
    const resortCount = await Hotel.countDocuments({ type: "resort" });
    const villaCount = await Hotel.countDocuments({ type: "villa" });
    const cabinCount = await Hotel.countDocuments({ type: "cabin" });
    res.status(200).json([
      { type: "Hotel", value: hotelCount },
      { type: "Apartment", value: appartmentCount },
      { type: "Resort", value: resortCount },
      { type: "Villa", value: villaCount },
      { type: "Cabin", value: cabinCount },
    ]);
  } catch (error) {
    next(error);
  }
};
