export const getNewWordStubTestData = (id: string) => ({
  id: id,
  name: "",
  creationDate: "now",
  defs: [
    {
      id: "defId",
      pos: 1,
      def: "",
      image: "",
      wordId: id,
    },
  ],
});
