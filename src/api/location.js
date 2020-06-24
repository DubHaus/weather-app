import { getResponce } from "./utils";

const __apiBase = 'https://api.opencagedata.com/geocode/v1/json';
const __apiKey = '87690e46b82f4cffa599718de4acdfe6';

export const getLocation = async (city) => {
  const url = `${__apiBase}?q=${city}&key=${__apiKey}&no_annotations=1&no_dedupe=1&no_record=1&roadinfo=1`
  const responce = await getResponce(url);

  return responce;
}