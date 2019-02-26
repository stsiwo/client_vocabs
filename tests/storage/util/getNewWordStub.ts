export const getNewWordStubTestData = (id: string) => ({
  id: id,
  name: "",
  createDate: "now",
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
