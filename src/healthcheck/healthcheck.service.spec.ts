import { Test, TestingModule } from "@nestjs/testing";
import { HealthcheckService } from "./healthcheck.service";

describe("HealthcheckService", () => {
  let service: HealthcheckService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HealthcheckService],
    }).compile();
    service = module.get<HealthcheckService>(HealthcheckService);
  });
  it("return 'Ok' in string", () => {
    expect(service.healthcheck()).toBe("Ok");
  });
});
