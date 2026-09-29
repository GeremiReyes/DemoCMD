import cmdLogo from '../../assets/images/cmd_logo.png';

export const CmdLogo = ({ className = 'h-12 w-auto' }) => (
  <img
    src={cmdLogo}
    alt="Colegio Médico Dominicano CMD"
    className={`block object-contain ${className}`}
  />
);
