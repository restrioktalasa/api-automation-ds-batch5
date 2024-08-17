export const putSchema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
      "name": { "type": "string" },
      "job": { "type": "string" },
      "updatedAt": { "type": "string", "format": "date-time" }
    },
    "required": ["name", "job", "updatedAt"]
  };