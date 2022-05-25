import API from "../config/axios";
import handleError from "./handleError";
import {ModeDataInterface} from "../components/MainPage/AutoMode";

const SwitchMode = async ( body: ModeDataInterface ) => {
  try {
    const response = await API.post("/control",body);
    return { data: response.data, statusCode: 201, errorMessage: "" };
  } catch (err) {
    return handleError(err);
  }
};

export default SwitchMode;
