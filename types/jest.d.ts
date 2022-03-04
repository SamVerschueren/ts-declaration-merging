type DescribeParams = Parameters<jest.Describe>;

interface PlatformSupport {
  firefox?: boolean;
}

declare namespace jest {
  interface Describe {
    platform(name: DescribeParams[0], support: PlatformSupport, fn: DescribeParams[1]);
  }
}
