import referenceQr from '../../../assets/images/reference_qr.png';
import cmdLogo from '../../../assets/images/cmd_logo.png';

// Genera el carnet vertical en PNG y dispara la descarga.
export async function downloadCarnet(affiliate) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const w = 540;
  const h = 856;
  canvas.width = w;
  canvas.height = h;

  // White rounded card background
  ctx.fillStyle = '#FFFFFF';
  ctx.beginPath();
  const r = 32;
  ctx.moveTo(r, 0);
  ctx.lineTo(w - r, 0);
  ctx.quadraticCurveTo(w, 0, w, r);
  ctx.lineTo(w, h - r);
  ctx.quadraticCurveTo(w, h, w - r, h);
  ctx.lineTo(r, h);
  ctx.quadraticCurveTo(0, h, 0, h - r);
  ctx.lineTo(0, r);
  ctx.quadraticCurveTo(0, 0, r, 0);
  ctx.closePath();
  ctx.fill();

  ctx.save();
  ctx.clip();

  const topGrad = ctx.createLinearGradient(0, 0, w, 350);
  topGrad.addColorStop(0, '#0F766E');
  topGrad.addColorStop(0.55, '#047857');
  topGrad.addColorStop(1, '#064E3B');
  ctx.fillStyle = topGrad;
  ctx.fillRect(0, 0, w, 394);

  ctx.fillStyle = 'rgba(52, 211, 153, 0.25)';
  ctx.beginPath();
  ctx.ellipse(-75, 260, 260, 190, -0.55, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = 'rgba(167, 243, 208, 0.2)';
  ctx.beginPath();
  ctx.moveTo(250, -80);
  ctx.lineTo(330, -80);
  ctx.lineTo(430, 390);
  ctx.lineTo(350, 390);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = 'rgba(16, 185, 129, 0.2)';
  ctx.beginPath();
  ctx.moveTo(w, 40);
  ctx.lineTo(w - 170, 220);
  ctx.lineTo(w, 500);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = '#FFFFFF';
  ctx.beginPath();
  ctx.moveTo(0, 360);
  ctx.bezierCurveTo(118, 306, 213, 296, 326, 340);
  ctx.bezierCurveTo(426, 379, 482, 404, w, 368);
  ctx.lineTo(w, h);
  ctx.lineTo(0, h);
  ctx.closePath();
  ctx.fill();

  const logoImg = new Image();
  logoImg.src = cmdLogo;

  await new Promise((resolve) => {
    logoImg.onload = () => resolve();
    logoImg.onerror = () => resolve();
  });

  if (logoImg.complete && logoImg.naturalWidth > 0) {
    const logoW = 58;
    const logoH = logoW * (logoImg.naturalHeight / logoImg.naturalWidth);
    const logoX = 146;
    const logoY = 50;
    ctx.drawImage(logoImg, logoX, logoY, logoW, logoH);

    ctx.textAlign = 'left';
    ctx.fillStyle = '#ECFDF5';
    ctx.font = '800 11px "Plus Jakarta Sans", sans-serif';
    ctx.letterSpacing = '1.4px';
    ctx.fillText('COLEGIO MEDICO', logoX + logoW + 10, logoY + 25);
    ctx.fillText('DOMINICANO', logoX + logoW + 10, logoY + 39);
    ctx.letterSpacing = '0px';
  }

  // Bottom wave
  ctx.fillStyle = '#10B981';
  ctx.beginPath();
  ctx.moveTo(0, h - 80);
  ctx.bezierCurveTo(115, h - 92, 215, h - 72, 315, h);
  ctx.lineTo(0, h);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = '#064E3B';
  ctx.beginPath();
  ctx.moveTo(0, h - 48);
  ctx.bezierCurveTo(125, h - 75, 250, h - 42, 365, h);
  ctx.lineTo(0, h);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = '#CBD5E1';
  ctx.beginPath();
  ctx.moveTo(265, h);
  ctx.bezierCurveTo(315, h - 32, 370, h - 22, w, h);
  ctx.closePath();
  ctx.fill();

  const photoSize = 228;
  const photoX = (w - photoSize) / 2;
  const photoY = 170;

  ctx.fillStyle = '#FFFFFF';
  ctx.beginPath();
  ctx.arc(w / 2, photoY + photoSize / 2, photoSize / 2 + 11, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 6;
  ctx.stroke();

  const doctorImg = new Image();
  doctorImg.crossOrigin = 'anonymous';
  doctorImg.src = affiliate.fotoUrl;

  await new Promise((resolve) => {
    doctorImg.onload = () => resolve();
    doctorImg.onerror = () => resolve();
  });

  ctx.save();
  ctx.beginPath();
  ctx.arc(w / 2, photoY + photoSize / 2, photoSize / 2, 0, Math.PI * 2);
  ctx.clip();
  if (doctorImg.complete && doctorImg.naturalWidth > 0) {
    ctx.drawImage(doctorImg, photoX, photoY, photoSize, photoSize);
  } else {
    ctx.fillStyle = '#CBD5E1';
    ctx.fillRect(photoX, photoY, photoSize, photoSize);
  }
  ctx.restore();

  ctx.textAlign = 'center';
  ctx.fillStyle = '#0F172A';
  ctx.font = '900 28px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(affiliate.nombre, w / 2, 470);

  ctx.fillStyle = '#047857';
  ctx.font = '900 21px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(affiliate.profesion, w / 2, 508);

  ctx.fillStyle = '#475569';
  ctx.font = '700 14px "JetBrains Mono", monospace';
  ctx.fillText(`Exequátur: ${affiliate.exequatur}`, w / 2, 536);

  const qrSize = 168;
  const qrX = (w - qrSize) / 2;
  const qrY = 582;
  const qrImg = new Image();
  qrImg.src = referenceQr;

  await new Promise((resolve) => {
    qrImg.onload = () => resolve();
    qrImg.onerror = () => resolve();
  });

  if (qrImg.complete && qrImg.naturalWidth > 0) {
    ctx.drawImage(qrImg, qrX, qrY, qrSize, qrSize);
  }

  ctx.restore();

  const link = document.createElement('a');
  link.download = `Carnet_CMD_${affiliate.exequatur}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
}
