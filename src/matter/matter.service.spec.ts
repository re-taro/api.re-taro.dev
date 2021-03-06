import { Test, TestingModule } from "@nestjs/testing";
import { MatterService } from "./matter.service";

describe("MatterService", () => {
  let service: MatterService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MatterService],
    }).compile();
    service = module.get<MatterService>(MatterService);
  });
  it("return parsed data", () => {
    expect(service.parser("---\nabc: xyz\n---\n\nI'm fine")).toStrictEqual({
      content: "I'm fine",
      data: { abc: "xyz" },
    });
  });
  it("return assets parse data", async () => {
    expect(await service.readFile("test")).toStrictEqual({
      content: "# a\n## b\n### c\n",
      data: {
        title: "Something1",
        id: "test",
        emoji: "๐ง",
        date: "2020-12-25",
        tags: ["a", "b", "c"],
      },
    });
  });
  it("return fetch parse data", async () => {
    expect(await service.fetchFile("hello-world")).toStrictEqual({
      content:
        "##" +
        " ใใญใฐ้่จญใใพใใ\n\nใใใซใกใฏใ[@Re-taro](https://twitter.com/10969_rintaro/)ใงใใ\n\nใใฎๅบฆใใญใฐใใใผใใใฉใชใชใฎๅ้จใซ้่จญใใพใใใ\n\nไธๅฟ้ๅคใใญใฐใฎใคใใใงใใใๆ่กใกใคใณใง่ฒใใขใฆใใใใใงใใๅ ดใซใใฆใใใใใจ่ใใฆใพใใ\n\nใใใงใฏใ",
      data: {
        title: "Hello World",
        id: "hello-world",
        emoji: "๐",
        date: "2022-01-05",
        tags: ["develop", "hello"],
      },
    });
  });
});
