// ENUM of available email reply types
/**
 * Enum for email reply types.
 * @readonly
 * @enum {string}
 */
export const EMAIL_REPLY_TYPE = {
	REPLY: "REPLY",
	REPLY_ALL: "REPLY_ALL",
	FORWARD: "FORWARD",
};

frappe.email_reply_type = EMAIL_REPLY_TYPE;
