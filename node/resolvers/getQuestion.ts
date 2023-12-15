export const getQuestion = async (
  _: any,
  { data }: { data: any },
  { clients: { clientGetQuestion: clientGetQuestion } }: Context
) => clientGetQuestion.getQuestion(data)
