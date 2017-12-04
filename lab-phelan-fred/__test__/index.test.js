const reader = require(`../lib/reader`);

describe(`Testing suite for reader.js`, () => {

  describe('Testing reader.readTrio()', () => {

    test(`+ : "Return first 25 chars of each three files"`, (done) => {
      reader(
        [`${__dirname}/../assets/ani.txt`,
          `${__dirname}/../assets/nqu.txt`,
          `${__dirname}/../assets/zzq.txt`,
        ],
        (error,data) => {
          expect(data).toEqual([
            'anianiani anianiani anian',
            'nqu uqn nqu uqn nqu uqn n',
            'zzq_zzq_qzz____zzq_zzq_qz',
          ]);
          done();
        });
    });

    test(`- : "<paths> is not an array."`, () => {
      expect (
        () => {
          reader(
            'break <paths> : Not array',
            (error,data)=>{return error, data;}
          );
        }
      ).toThrow();
    });

    test(`- : "<paths> length is wrong."`, () => {
      expect (
        () => {
          reader(
            [null, 'one','two','three','four', 0, null],
            (error,data)=>{return error, data;}
          );
        }
      ).toThrow();
    });

    test(`- : "<paths> is not populated with strings."`, () => {
      expect (
        () => {
          reader(
            [1, 2, 3],
            (error,data)=>{return error, data;}
          );
        }
      ).toThrow();
    });

    test(`- : "<paths> is not populated with strings."`, () => {
      expect (
        () => {
          reader(
            [1, 2, 3],
            (error,data)=>{return error, data;}
          );
        }
      ).toThrow();
    });

    test(`- : "Callback failure: error in ReadFile callback."`, (done) => {
      reader(
        //Placed broken filenames here
        [`${__dirname}/../assets/ani1.md`,
          `${__dirname}/../assets/nqua.txt`,
          `${__dirname}/../assets/asfasdfe.txt`,
        ],
        (error) => {
          expect(error).toBeTruthy();
          done();
        });
    });

    test(`- : "<paths> is not populated with strings."`, () => {
      expect (
        () => {
          reader(
            [`${__dirname}/../assets/ani.txt`,
              `${__dirname}/../assets/nqu.txt`,
              `${__dirname}/../assets/zzq.txt`,
            ],
            'Breaking - this should be a function.'
          );
        }
      ).toThrow();
    });

  });

});
