{
  /**
   * Type Aliases
   */

  type Text = string;
  const name: Text = '서근';
  const address: Text = '대전';

  type Info = {
    name: string;
    age: number;
    profession: string;
  };

  const resume: Info = {
    name: '김선중',
    age: 28,
    profession: 'FrontEnd Developer',
  };
  resume.profession = '프론트엔드 개발자';
  console.log('김선중 이력서 --->', resume);

  /**
   * String Literal Types --> 사용 법은 [1-5-unions.ts 에서 확인 가능]
   */
  type Seogun = '서근';
  /* const seogun: Seogun = '선중'; */ // '"선중"' 형식은 '"서근"' 형식에 할당할 수 없습니다.
  const seogun: Seogun = '서근';

  type Current = true;
  const isCurrent: Current = true;
  console.log(isCurrent);
}
