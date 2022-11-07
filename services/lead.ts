import Lead from "../models/lead"

export const leadService = async (name: string, email: string) => {
  try {
    const leadResult = await Lead.create({
      name,
      email
    });

    leadResult.save();

    return {
      success: true,
      data: leadResult,
      msg: 'Lead Successfully Created!'
    }
  } catch (error) {
    return {
      success: false,
      data: error,
      msg: 'Error while creating Lead'
    }
  }
}  