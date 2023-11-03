import bcryptjs from "bcryptjs";

console.log(
  bcryptjs.compareSync(
    "lolcatk",
    "$2a$10$qlCC6a48ZJhiPiOA6Mf/W.p/KlKCvjYl9awPv7u941TkrTjVUgfr6"
  )
);