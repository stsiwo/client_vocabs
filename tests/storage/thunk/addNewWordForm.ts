export const getNewWordStubTestData = (id: string) => ({
  id: id,
  name: "",
  createDate: "now",
  defs: [
    {
      id: "defID",
      pos: 2, 
      def: "",
      image: "",
      _wordId: id,
    },
  ],
});

export const addNewWordActionTestData =  {
  wordId: {
    id: "wordId",
    name: "",
    createDate: "now",
    defs: ["defID"],
  }
}

export const addNewDefActionTestData = {
  defID: {
    id: "defID",
    pos: 2,
    def: "",
    image: "",
    _wordId: "wordId",
  }
}
