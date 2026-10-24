# SDOBenchmark solar sample montages

Two figures made from actual user-uploaded original SDOBenchmark images. The original 256 × 256 JPG solar tiles have not been replaced or AI-generated; labels, borders and typography were added around them.

- `ar-11400-sample.png` — original training sample `11400_2012_01_15_12_00_00_0`, negative label (0)
- `ar-11401-sample.png` — original training sample `11401_2012_01_16_04_53_01_0`, positive label (1)

Both images show three modalities (AIA 131 Å, AIA 171 Å, HMI magnetogram) across four timestamps; each complete original model input has ten modalities across four timestamps.

**Required before merging:** Download `SolarFlare_Portfolio_Images.zip` from the ChatGPT conversation and upload the two PNG files into this folder on this PR branch. Do not upload the ZIP itself. The extra side-by-side overview in the ZIP is optional and is not linked by the website.

Source acknowledgement: SDOBenchmark dataset and NASA/SDO AIA/HMI observations. Labels refer to the 24-hour flare-classification target, not visual evidence of a flare in the displayed input images.
