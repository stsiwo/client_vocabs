import extractUploadImages from '../../src/util/extractUploadImages';
//import extractDestroyImages from '../../src/util/extractDestroyImages';

describe('extractUploadImages', function() {
  it('extract defs whose image is to be uploaded', () => {
  
    const state = [
      {
        id: "word1",
        defs: [
          // case1: existing def & add new image from null
          {
            id: "def1",
            image: "null"
          },
          // case2: existing def & remove image
          {
            id: "def2",
            image: "image2"
          },
          // case3: existing def & unchanged no image 
          {
            id: "def3",
            image: null 
          },
          // case4: existing def & unchanged image 
          {
            id: "def4",
            image: "image4"
          },
          // case5: existing def & update image 
          {
            id: "def5",
            image: "image5"
          },
          // case6: new def & new image 
          //{
            //id: "def6",
            //image: "image6"
          //},
          // case7: new def & no image 
          //{
            //id: "def7",
            //image: "image7"
          //},
          // case8: existing def & remove def 
          {
            id: "def8",
            image: "image8"
          },
        ]
      },
    ]

    const form = [
      {
        id: "word1",
        defs: [
          // case1: existing def & add new image from null
          {
            id: "def1",
            image: "image1",
            imageFile: "file1"
          },
          // case2: existing def & remove image
          {
            id: "def2",
            image: null
          },
          // case3: existing def & unchanged no image 
          {
            id: "def3",
            image: null 
          },
          // case4: existing def & unchanged image 
          {
            id: "def4",
            image: "image4"
          },
          // case5: existing def & update image 
          {
            id: "def5",
            image: "image5-update",
            imageFile: "file5"
          },
          // case6: new def & new image 
          {
            id: "def6",
            image: "image6-new",
            imageFile: "file6"
          },
          // case7: new def & no image 
          {
            id: "def7",
            image: null
          },
          // case8: existing def & remove def 
          //{
            //id: "def8",
            //image: "image8"
          //},
        ]
      },
      {
        id: "word2",
        defs: [
          {
            id: "def2-1",
            image: null
          },
          {
            id: "def2-2",
            image: "image2-2",
            imageFile: "file2-2"
          },
        ]
      }
    ]

    const expected = [
      {
        "defs":  [
          {
            "id": "def1",
            "image": "image1",
            "imageFile": "file1",
          },
          {
            "id": "def5",
            "image": "image5-update",
            "imageFile": "file5",
          },
          {
            "id": "def6",
            "image": "image6-new",
            "imageFile": "file6",
          },
        ],
        "id": "word1",
      },
      {
        "defs":  [
          {
            "id": "def2-2",
            "image": "image2-2",
            "imageFile": "file2-2",
          },
        ],
        "id": "word2",
      },
    ];

    const upload = extractUploadImages(state, form);    

    expect(upload).toEqual(expected);
  });

});

